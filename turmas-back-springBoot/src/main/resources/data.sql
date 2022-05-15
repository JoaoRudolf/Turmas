INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (1, 'Paulo Cintura', 40, 'rua do exercicio', 'M');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (2, 'Patropi', 51, 'rua da guimba', 'M');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (3, 'Galeão Cumbica', 87, 'rua do quero quero', 'M');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (4, 'Catifunda', 39, 'rua da fumaça', 'F');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (5, 'Godinez', 8, 'rua da vila, 99', 'M');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (6, 'Quico', 9, 'rua da vila, 87', 'M');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (7, 'Chiquinha', 8, 'rua da vila, 14', 'F');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (8, 'Pópis', 9, 'rua da vila, 99', 'F');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (9, 'Huguinho', 7, 'rua 2', 'M');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (10, 'Zezinho', 7, 'rua 2', 'M');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (11, 'Luisinho', 7, 'rua 2', 'M');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (12, 'Donald', 25, 'rua 7', 'M');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (13, 'Raimundo', 52, 'rua legal', 'M');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (14, 'Girafalez', 46, 'rua da vila, 87', 'M');
INSERT INTO `projetoturmas`.`pessoa` (`id`, `nome`, `idade`, `endereco`, `sexo`) VALUES (15, 'Pardal', 13, 'rua do penacho', 'M');


INSERT INTO `projetoturmas`.`turma` (`id`, `nome`, `periodo`, `max_alunos`) VALUES (1, 'Turma da Escolinha', 'noturno', 25);
INSERT INTO `projetoturmas`.`turma` (`id`, `nome`, `periodo`, `max_alunos`) VALUES (2, 'Turma do Chaves', 'vespertino', 18);
INSERT INTO `projetoturmas`.`turma` (`id`, `nome`, `periodo`, `max_alunos`) VALUES (3, 'Gibi da Disney', 'matutino', 21);


INSERT INTO `projetoturmas`.`aluno` (`id`, `ano`, `pessoa_id`, `turma_id`) VALUES (1, 1, 1, 1);
INSERT INTO `projetoturmas`.`aluno` (`id`, `ano`, `pessoa_id`, `turma_id`) VALUES (2, 1, 2, 1);
INSERT INTO `projetoturmas`.`aluno` (`id`, `ano`, `pessoa_id`, `turma_id`) VALUES (3, 1, 3, 1);
INSERT INTO `projetoturmas`.`aluno` (`id`, `ano`, `pessoa_id`, `turma_id`) VALUES (4, 1, 4, 1);
INSERT INTO `projetoturmas`.`aluno` (`id`, `ano`, `pessoa_id`, `turma_id`) VALUES (5, 1, 5, 2);
INSERT INTO `projetoturmas`.`aluno` (`id`, `ano`, `pessoa_id`, `turma_id`) VALUES (6, 1, 6, 2);
INSERT INTO `projetoturmas`.`aluno` (`id`, `ano`, `pessoa_id`, `turma_id`) VALUES (7, 1, 7, 2);
INSERT INTO `projetoturmas`.`aluno` (`id`, `ano`, `pessoa_id`, `turma_id`) VALUES (8, 1, 8, 2);
INSERT INTO `projetoturmas`.`aluno` (`id`, `ano`, `pessoa_id`, `turma_id`) VALUES (9, 1, 9, 3);
INSERT INTO `projetoturmas`.`aluno` (`id`, `ano`, `pessoa_id`, `turma_id`) VALUES (10, 1, 10, 3);
INSERT INTO `projetoturmas`.`aluno` (`id`, `ano`, `pessoa_id`, `turma_id`) VALUES (11, 1, 11, 3);
INSERT INTO `projetoturmas`.`aluno` (`id`, `ano`, `pessoa_id`, `turma_id`) VALUES (12, 1, 12, 3);


INSERT INTO `projetoturmas`.`professor` (`id`, `pessoa_id`, `turma_id`) VALUES (1, 13, 1);
INSERT INTO `projetoturmas`.`professor` (`id`, `pessoa_id`, `turma_id`) VALUES (2, 14, 2);
INSERT INTO `projetoturmas`.`professor` (`id`, `pessoa_id`, `turma_id`) VALUES (3, 15, 3);
