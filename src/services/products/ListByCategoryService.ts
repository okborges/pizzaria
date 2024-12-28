import prismaClient from '../../prisma';

class ListByCategoryService {
  async execute(category_id: string) {
    const findByCategory = await prismaClient.product.findMany({
      where: {
        category_id,
      },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        banner: true,
        category_id: true,
      },
    });
    return findByCategory;
  }
}

export { ListByCategoryService };
