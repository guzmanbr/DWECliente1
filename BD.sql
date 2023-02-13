CREATE database IF NOT EXISTS comercio;
use comercio;
create table if not exists productos
(
    id int(11) not null auto_increment,
    nombre varchar(100) not null,
    descripcion varchar(100)not null,
    cat int,
    primary key (id)
);

create table if not exists categorias
(
    id int(11) not null auto_increment,
    nombre varchar(100) not null,
    primary key (id)
);

insert into categorias (nombre) values ("INFORMÁTICA");
insert into categorias (nombre) values ("GANADERÍA");

INSERT INTO productos (nombre,descripcion,cat) VALUES ('Teclado','Teclado USB de Logitech',1);
INSERT INTO productos (nombre,descripcion,cat) VALUES ('Perro','Gran danés arlequinado, macho',2);
INSERT INTO productos (nombre,descripcion,cat) VALUES ('Vaca','Morucha color cárdena',2);
INSERT INTO productos (nombre,descripcion,cat) VALUES ('Cerdo','Marrano ibérico 1 año',2);
INSERT INTO productos (nombre,descripcion,cat) VALUES ('Portátil','ordenador portátil lenovo 2345x',1);

