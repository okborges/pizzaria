import prismaClient from '../../prisma';

interface OrderRequest {
  name: string;
  table: number;
}

class CreateOrderService {
  async execute({ name, table }: OrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        table,
        name,
      },
    });

    return order;
  }
}

export { CreateOrderService };
