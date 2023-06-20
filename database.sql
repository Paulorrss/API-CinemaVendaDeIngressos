create database cinema_ingresso_db;
use cinema_ingresso_db;

create table cliente (
    id int primary key auto_increment,
    nome varchar(300) not null,
    sexo varchar(100),
    data_nascimento date,
    cpf varchar(100),
    rg varchar(100),
    email varchar(300),
    endereco varchar(300),
    telefone varchar(300),
    cartao_sus varchar(300),
    tipagem_sanguinea varchar(2),
    fator_rh varchar(1)
);

insert into cliente (id, nome, sexo, data_nascimento, cpf, rg, email, endereco, telefone, cartao_sus, tipagem_sanguinea, fator_rh) values (null, 'Kayo Cavilia', 'Masculino', '2004-06-04', '031.457.587-89', '555554', 'kayo@gmail.com', 'Rua da luz','992415-5874','5556558', 'A', '+');
insert into cliente (id, nome, sexo, data_nascimento, cpf, rg, email, endereco, telefone, cartao_sus, tipagem_sanguinea, fator_rh) values (null, 'Paulo Ricardo', 'Masculino', '2003-10-04', '458.457.587-89', '145784', 'paulo@gmail.com', 'Rua da sol','992455-5874','4786558', 'A', '-');
insert into cliente (id, nome, sexo, data_nascimento, cpf, rg, email, endereco, telefone, cartao_sus, tipagem_sanguinea, fator_rh) values (null, 'Sabrina Melo de Costa', 'Feminino', '2000-05-06', '001.407.507-89', '500554', 'sabrinam@gmail.com', 'Rua do Rodeio','992515-5894','0056558', 'AB', '+');
insert into cliente (id, nome, sexo, data_nascimento, cpf, rg, email, endereco, telefone, cartao_sus, tipagem_sanguinea, fator_rh) values (null, 'Maria Eduarda Braz', 'Feminino', '1990-12-08', '008.407.087-89', '005784', 'marie@gmail.com', 'Rua da lua','992055-5400','4086550', 'A', '+');

create table classificacao (
    id int primary key not null auto_increment,
    nome varchar (300)
);
insert into classificacao (id, nome) values (null, 'Baixa');
insert into classificacao (id, nome) values (null, '+12');
insert into classificacao (id, nome) values (null, '+17');
insert into classificacao (id, nome) values (null, '+10');


create table filme (
    id int primary key auto_increment,
    titulo varchar(300) not null,
    sinopse varchar(500),
    atores varchar(300),
    diretor varchar(300),
    genero varchar(300),
    classificacao_indicativa varchar(300),
    duracao time
);
insert into filme (id, titulo, sinopse, atores, diretor, genero, classificacao_indicativa, duracao) values (null, 'Cangaceiro', 'Filme sobre história do nordeste','Carlos enrique, joao miguel, maria gloria', 'Carlos Drumon', 'Comédia', ' +12', '02:00:00');
insert into filme (id, titulo, sinopse, atores, diretor, genero, classificacao_indicativa, duracao) values (null, 'Noite Sobria', 'Filme sobre história de fantasmas que assombram uma casa','Maria lucia, Afonso andrade, Jenuino custódio', 'Schuts Deodoro', 'Terror', ' +16', '02:30:00');
insert into filme (id, titulo, sinopse, atores, diretor, genero, classificacao_indicativa, duracao) values (null, 'O desejos', 'Filme animado sobre história onde desejos profundos podem se tornar realidade ','Juventino deodoro, Marcia Regina, Big bIG', 'Arleton randerb', 'Animalção', ' Livre', '02:20:00');
insert into filme (id, titulo, sinopse, atores, diretor, genero, classificacao_indicativa, duracao) values (null, 'Bob Esponja', 'Filme animado onde Bob Esponja sai atrás da fórmula secreta ','Kayo Cavilia, Marcia Regina, Jack Person', 'Maria Scronic', 'Animação', ' Livre', '01:50:00');

create table sala (
    id int primary key auto_increment,
    nome varchar(300),
    numero int,
    capacidade varchar(300),
    local varchar(300)
);

insert into sala (id, nome, numero, capacidade, local) values (null, 'Sala 1', 1, '40', 'Lado Direito');
insert into sala (id, nome, numero, capacidade, local) values (null, 'Sala 2', 2, '40', 'Lado Direito');
insert into sala (id, nome, numero, capacidade, local) values (null, 'Sala 3', 23, '40', 'Lado Esquerdo');
insert into sala (id, nome, numero, capacidade, local) values (null, 'Sala 4', 4, '40', 'Lado Esquerdo');

create table poltrona (
    id int primary key auto_increment,
    numero int,
    fileira int,
    coordenada varchar(100),
    status varchar(100),
    sala_id int,
    foreign key(sala_id) references sala (id)
);
insert into poltrona(id, numero, fileira, coordenada, status, sala_id) values (null, 1, 1, 'primeira fila poltrona 1', 'ocupada', 1);
insert into poltrona(id, numero, fileira, coordenada, status, sala_id) values (null, 2, 1, 'primeira fila poltrona 2', 'livre', 2);
insert into poltrona(id, numero, fileira, coordenada, status, sala_id) values (null, 5, 3, 'terceira fila poltrona 21', 'ocupada', 3);
insert into poltrona(id, numero, fileira, coordenada, status, sala_id) values (null, 39, 4, 'quarta fila poltrona 39', 'livre', 4);

create table sessao (
    id int primary key auto_increment,
    data date not null,
    horario_inicio time not null,
    horario_fim time not null,
    sala_id int not null,
    filme_id int not null,
    foreign key(sala_id) references sala (id),
    foreign key(filme_id) references filme (id)
);
insert into sessao(id, data, horario_inicio, horario_fim, sala_id, filme_id) values (null, '2023-06-18', '14:00:00', '16:00:00', 1, 1);
insert into sessao(id, data, horario_inicio, horario_fim, sala_id, filme_id) values (null, '2023-06-18', '15:00:00', '17:50:00', 2, 2);
insert into sessao(id, data, horario_inicio, horario_fim, sala_id, filme_id) values (null, '2023-06-19', '15:00:00', '17:50:00', 3, 3);
insert into sessao(id, data, horario_inicio, horario_fim, sala_id, filme_id) values (null, '2023-06-19', '16:00:00', '18:50:00', 4, 4);

create table ingresso (
    id int primary key auto_increment,
    codigo varchar(20),
    valor decimal(12, 2),
    data_hora datetime,
    sessao_id int not null,
    poltrona_id int not null,
    foreign key(sessao_id) references sessao (id),
    foreign key(poltrona_id) references poltrona (id)
);
insert into ingresso(id, codigo, valor, data_hora, sessao_id, poltrona_id) values (null, '012000', '30.00', '2023-06-18 14:00:00', 1,1);
insert into ingresso(id, codigo, valor, data_hora, sessao_id, poltrona_id) values (null, '100100', '25','2023-06-18 15:00:00', 2,2);
insert into ingresso(id, codigo, valor, data_hora, sessao_id, poltrona_id) values (null, '100100', '35','2023-06-19 15:00:00', 3,3);
insert into ingresso(id, codigo, valor, data_hora, sessao_id, poltrona_id) values (null, '101101', '30','2023-06-19 16:00:00', 4,4);

create table forma_pagamento (
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    ativado int not null default 1
);
insert into forma_pagamento(id, nome, ativado) values (null, 'A vista debito', 1);
insert into forma_pagamento(id, nome, ativado) values (null, 'A prazo', 2);
insert into forma_pagamento(id, nome, ativado) values (null, 'Dinheiro', 3);
insert into forma_pagamento(id, nome, ativado) values (null, 'Crédito', 4);

create table venda (
    id int primary key auto_increment,
    valor decimal(12, 2),
    data_hora datetime,
    situacao varchar(20) not null default 'pendente',
    ingresso_id int not null,
    cliente_id int not null,
    forma_pagamento_id int not null,
    foreign key(ingresso_id) references ingresso(id),
    foreign key(cliente_id) references cliente(id),
    foreign key(forma_pagamento_id) references forma_pagamento(id)
);

insert into venda(id, valor, data_hora, situacao, ingresso_id, cliente_id, forma_pagamento_id) values (null, '50.00','2023-06-18 14:00:00', 'pago', 1, 1,1 );
insert into venda(id, valor, data_hora, situacao, ingresso_id, cliente_id, forma_pagamento_id) values (null, '40.00','2023-06-18 15:00:00', 'pendente', 2, 2,2 );
insert into venda(id, valor, data_hora, situacao, ingresso_id, cliente_id, forma_pagamento_id) values (null, '40.00','2023-06-18 15:00:00', 'pago', 3, 3,3 );
insert into venda(id, valor, data_hora, situacao, ingresso_id, cliente_id, forma_pagamento_id) values (null, '35.00','2023-06-19 16:00:00', 'pendente', 4, 4,4 );

