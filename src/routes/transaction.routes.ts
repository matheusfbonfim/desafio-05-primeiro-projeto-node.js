import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    // Listar todas as transições presentes no repositories/database
    const transactions = transactionsRepository.all()
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    // Dados da requisição
    const { title, value, type } = request.body;

    // Service - responsáveis por toda tratativa de dados
    const createTransactions = new CreateTransactionService(
      transactionsRepository,
    );

    const transaction = createTransactions.execute({ title, value, type });

    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
