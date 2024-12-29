import prismaClient from '../../prisma';

class CreateCategoryService {
  async execute(name: string) {
    if (name === '') {
      throw new Error('Category name cannot be empty');
    }

    const category = await prismaClient.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CreateCategoryService };
