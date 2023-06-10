create database cinema_ingresso_db;
use cinema_ingresso_db;

create table cliente (
    id int primary key auto_increment,
    nome varchar(300),
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

create table classificacao (
    id int primary key not null auto_increment,
    nome varchar (300)
);

create table filme (
    id int primary key auto_increment,
    titulo varchar(300),
    sinopse varchar(500),
    atores varchar(300),
    diretor varchar(300),
    genero varchar(300),
    classificacao_indicativa varchar(300),
    duracao time
);

create table sala (
    id int primary key auto_increment,
    nome varchar(300),
    numero int,
    capacidade varchar(300),
    local varchar(300)
);

create table poltrona (
    id int primary key auto_increment,
    numero int,
    fileira int,
    coordenada varchar(100),
    status varchar(100),
    sala_id int,
    foreign key(sala_id) references sala (id)
);

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

create table forma_pagamento (
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    ativado int not null default 1
);

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