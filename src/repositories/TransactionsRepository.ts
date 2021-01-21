import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransictionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
  }

  public getBalance(): Balance {
    // TODO
  }

  public create({ title, value, type }: CreateTransictionDTO): Transaction {
    // Instância uma nova transaction
    const transaction = new Transaction({ title, value, type });
    // Armazena na lista de repositorios
    this.transactions.push(transaction);

    // Retorna transição criada
    return transaction;
  }
}

export default TransactionsRepository;
