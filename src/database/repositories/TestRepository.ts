import { BaseRepository } from "./BaseRepository";

interface TestCustomer {
  id: string;
  name: string;
  mobile: string;
  address?: string;
  note?: string;
  createdAt: string;
}

class TestRepository extends BaseRepository<TestCustomer> {
  constructor() {
    super("customers");
  }
}

export const testRepository = new TestRepository();