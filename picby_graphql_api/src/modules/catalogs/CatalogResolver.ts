import { UserInputError } from 'apollo-server-express';
import { Arg, Ctx, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import { Catalog } from '../../entity/Catalog';
import { User } from '../../entity/User';
import { Context } from '../../types/Context';
import { withAuthenticatedUser } from '../middleware/withAuthenticatedUser';
import { CreateCatalogInput } from './CatalogInput';

@Resolver(Catalog)
export class CatalogResolver {
  @UseMiddleware(withAuthenticatedUser)
  @Query(() => [Catalog])
  catalogs(
    @Ctx() ctx: Context
  ): Catalog[]  {
    const {user} = ctx;
    return user?.catalogs || [];
  }

  @UseMiddleware(withAuthenticatedUser)
  @Mutation(() => Catalog, { nullable: true })
  async addCatalog(
    @Arg('newCatalogData') newCatalogData: CreateCatalogInput,
    @Ctx() ctx: Context
  ): Promise<Catalog | null> {
    const user = await User.findOne(ctx.req.session?.userId);
    if (!user) {
      return null;
    }

    const catalog = await Catalog.create(newCatalogData);

    catalog.user = user;
    await catalog.save();

    return catalog;
  }


  @UseMiddleware(withAuthenticatedUser)
  @Mutation(() => Boolean)
  async removeCatalog(@Arg('id') id: string, @Ctx() ctx: Context) {
    //TODO: Throw some nice descriptive errors instead of returning false
      const { user } = ctx;

      if(!user) {
        return false;
      }

      const catalogToRemove = user?.catalogs.find(catalog => catalog.id === Number(id));
      if(!catalogToRemove) {
        throw new UserInputError("Catalog with given id not found")
      }
      await catalogToRemove.remove()
    
      return true;
    
  }
}
