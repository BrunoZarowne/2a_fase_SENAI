CREATE TABLE Usuarios(
	ID_Usuario Int PRIMARY KEY NOT NULL,
	Nome VARCHAR(100) NOT NULL,
	Email VARCHAR(150) NOT NULL,
	Data_Nascimento DATE NOT NULL,
	Img_Perfil VARCHAR(250) NOT NULL
);

CREATE TABLE ObrasMangas(
	ID_obra Int PRIMARY KEY NOT NULL,
	Nome_Obra VARCHAR(100) NOT NULL,
	Autor VARCHAR(200) NOT NULL,
	Paginas Int NOT NULL,
	Data_lançamento DATE NOT NULL,
	Sinopse VARCHAR(1000) NOT NULL,
	Img_Obra VARCHAR(200),
	Genero VARCHAR(20) NOT NULL	
);

INSERT INTO ObrasMangas VALUES (001, 'Berserk', 'Kentaro Miura', 224, '1989/08/05', 'Berserk é uma série de mangá escrita e ilustrada por Kentaro Miura. Situado em um mundo de fantasia sombria inspirado na Europa medieval, a história gira em torno de Guts, um solitário mercenário, e Griffith, o líder de um bando de mercenários chamado de "Bando do Falcão".', 'https://m.media-amazon.com/images/I/71lnvXSiITL.jpg', 'Manga');
INSERT INTO ObrasMangas VALUES (002, 'Mob Psycho 100', 'One', 200, '2012/04/12', 'A história desenrola-se à volta de “Mob”, um jovem que explodirá se a sua capacidade emocional chegar aos 100%. Este jovem com poderes psíquicos ganhou o apelido de “Mob” pois ele não se destaca entre as outras pessoas, por isso seu nome, o qual contém várias traduções.', 'https://m.media-amazon.com/images/I/91nunbvU04L._AC_UF1000,1000_QL80_.jpg', 'Manga');
INSERT INTO ObrasMangas VALUES (003, 'One Punch Man', 'One, Yusuku Murata', 232, '2015/10/05', 'One Punch Man acompanha Saitama, um jovem oficial incrivelmente forte que possui a força necessária para derrotar vilões com um único soco. Devido à sua incomparável força, ele se tornou entediado e busca por adversários que possam igualmente contra ele.', 'https://m.media-amazon.com/images/I/71OL6PvzA9L._AC_UF1000,1000_QL80_.jpg', 'Manga');
INSERT INTO ObrasMangas VALUES (004, 'My Hero Academia', 'Kōhei Horikoshi', 192, '2014/07/19', 'Boku no Hero conta a história de Izuku "Deku" Midoriya, um jovem que nasceu sem Indivualidade (poder) em um mundo em que 80% da população manifesta ao menos uma desde criança. O sonho do jovem de se tornar um herói, inspirado pelo herói nº 1, All Might, é massacrado pela descoberta.', 'https://m.media-amazon.com/images/I/81AjnD8nvHL.jpg', 'Manga');
INSERT INTO ObrasMangas VALUES (005, 'Kagura Bachi', 'Takeru Hokazono', 216, '2024/09/21', 'A história de Kagurabachi acompanha o protagonista Chihiro Rokuhira, um jovem que trabalha ao lado do pai, o lendário ferreiro, Kunishige Rokuhira. Decidido a seguir os caminhos do chefe da família, Chihiro se dedica e treina diariamente para se tornar um grande mestre forjador de katanas.', 'https://i.imgur.com/pMFB3Fq.png', 'Manga');
INSERT INTO ObrasMangas VALUES (006, 'One Piece', 'Eiichirô Oda', 192, '1999/10/20', 'A série foca em Monkey D. Luffy, um jovem que se tornou usuário de Akuma no Mi acidentalmente quando era criança. Ele comeu a Akuma no Mi conhecida como Gomu Gomu no Mi, ou Fruta da Borracha, que estava sob posse da tripulação do poderoso pirata Shanks, o Ruivo, o ídolo de infância de Luffy.', 'https://comichub.blob.core.windows.net/high/80cfb218-634d-4001-9df0-f7fa0347ac90.jpg', 'Manga');

CREATE TABLE ObrasHQs(
	ID_obra Int PRIMARY KEY NOT NULL,
	Nome_Obra VARCHAR(100) NOT NULL,
	Autor VARCHAR(200) NOT NULL,
	Paginas Int NOT NULL,
	Data_lançamento DATE NOT NULL,
	Sinopse VARCHAR(1000) NOT NULL,
	Img_Obra VARCHAR(200),
	Genero VARCHAR(20) NOT NULL	
);

INSERT INTO ObrasHQs VALUES (001, 'The Boys', 'Garth Ennis, Darick Robertson', '153', '2007/02/19', 'The Boys se passa em um universo onde indivíduos superpoderosos são reconhecidos como heróis pelo público em geral e pertencem à poderosa corporação Vought International, que os comercializa e monetiza. Fora de suas personas heroicas, a maioria é arrogante e corrupta.', 'https://m.media-amazon.com/images/I/818kKwdtJ4L._AC_UF1000,1000_QL80_.jpg', 'HQ');
INSERT INTO ObrasHQs VALUES (002, 'Invincible', 'Robert Kirkman', 344, '2003/01/22', 'Invincible. Baseada na HQ homônima, Invencível conta a história de um mundo habitado por super-heróis. A narrativa acompanha a vida de Mark Grayson (Invencível), que ganha seus poderes ao completar 17 anos e se une a seu pai, Nolan Grayson (Omni-Man), para combater os vilões.', 'https://falaanimal.com.br/wp-content/uploads/2022/06/SkyboundX25capa_29062022.jpg', 'HQ');
INSERT INTO ObrasHQs VALUES (003, 'Watchmen', 'Alan Moore, Dave Gibbons', 216, '1987/03/06', 'Quando um de seus antigos colegas é assassinado, o vigilante mascarado Rorschach descobre um plano para matar e desacreditar todos os super-heróis do passado e do presente. À medida que ele se reconecta com sua antiga legião de combate ao crime, um grupo desorganizado de super-heróis aposentados, dentre os quais somente um possui verdadeiros poderes, Rorschach vislumbra uma ampla e perturbadora conspiração que está ligada ao passado deles e a catastróficas consequências para o futuro.', 'https://m.media-amazon.com/images/I/81IOAiyRD+L._AC_UF894,1000_QL80_.jpg', 'HQ');
INSERT INTO ObrasHQs VALUES (004, 'Batman', 'Frank Miller', 144, '2008/07/18', 'Batman tem conseguido manter a ordem em Gotham com a ajuda de Jim Gordon e Harvey Dent. No entanto, um jovem e anárquico criminoso, conhecido apenas como Coringa, pretende testar o Cavaleiro das Trevas e mergulhar a cidade em um verdadeiro caos.', 'https://br.web.img3.acsta.net/pictures/16/08/16/16/22/131075.jpg', 'HQ');
INSERT INTO ObrasHQs VALUES (005, 'Sandman', 'Neil Gaiman, Malcom Jones |||', 616, '1988/11/29', 'A história é vista do ponto de vista de Sonho, um dos sete perpétuos, a representação antropomórfica do sonho, inicialmente preso por um grupo de humanos que almejava prender sua irmã mais velha Morte para que se tornassem imortais, mas falham e capturam sonho.', 'https://rika.vtexassets.com/arquivos/ids/278826/sandman-preludio-1.jpg?v=635877227581230000', 'HQ');
INSERT INTO ObrasHQs VALUES (006, 'V de Vingança', 'Alan Moore', 304, '1989/10/25', 'Uma poderosa e aterradora história sobre perda de liberdade e cidadania em um mundo bem possível, V DE VINGANÇA permanece como uma das maiores obras dos quadrinhos e o trabalho que revelou ao mundo seus criadores, ALAN MOORE e DAVID LLOYD.Encenada em uma Inglaterra de um futuro imaginário que se entregou ao fascismo, esta arrebatadora história captura a natureza sufocante da vida em um estado policial autoritário e a força redentora do espírito humano que se rebela contra essa situação.Obra de surpreendente clareza e inteligência, V DE VINGANÇA traz inigualável profundidade de caracterizações e verossimilhança em um audacioso conto de opressão e resistência.', 'https://m.media-amazon.com/images/I/71RccWOPFKL._AC_UF1000,1000_QL80_.jpg', 'HQ');

CREATE TABLE ObrasLivros(
	ID_obra Int PRIMARY KEY NOT NULL,
	Nome_Obra VARCHAR(100) NOT NULL,
	Autor VARCHAR(200) NOT NULL,
	Paginas Int NOT NULL,
	Data_lançamento DATE NOT NULL,
	Sinopse VARCHAR(1000) NOT NULL,
	Img_Obra VARCHAR(200),
	Genero VARCHAR(20) NOT NULL	
);

INSERT INTO ObrasLivros VALUES (001, 'Harry Potter', 'J. K. Rowling', 590, '1997/06/26', 'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.', 'https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg', 'Livro');
INSERT INTO ObrasLivros VALUES (002, 'O Senhor Dos Anéis', 'J. R. R. Tolkien', 1228, '1892/01/03', 'Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro.', 'https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UF1000,1000_QL80_.jpg', 'Livro');
INSERT INTO ObrasLivros VALUES (003, 'Anne Frank', 'Anne Frank', 416, '1947/06/25', 'Suas anotações narram os sentimentos, os medos e as pequenas alegrias de uma menina judia que, como sua família, lutou em vão para sobreviver ao Holocausto. Uma poderosa lembrança dos horrores de uma guerra, um testemunho eloquente do espírito humano. Assim podemos descrever os relatos feitos por Anne em seu diário.', 'https://m.media-amazon.com/images/I/91RMqWB-CTL._AC_UF1000,1000_QL80_.jpg', 'Livro');
INSERT INTO ObrasLivros VALUES (004, 'O Pequenho Principe', 'Antoine de Saint-Exupéry', 94, '1943/04/06', 'É um conto poético, com ilustrações em aquarela do autor, em que um piloto perdido no deserto encontra um jovem príncipe em visita à Terra vindo de um minúsculo asteroide. A história é filosófica e inclui críticas sociais ao mundo adulto.', 'https://m.media-amazon.com/images/I/71LJ4k-k9hL._AC_UF1000,1000_QL80_.jpg', 'Livro');
INSERT INTO ObrasLivros VALUES (005, 'A Culpa é Das Estrelas', 'John Green', 224, '2012/01/10', 'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta.', 'https://m.media-amazon.com/images/I/51M9IbBqxCL.jpg', 'Livro');
INSERT INTO ObrasLivros VALUES (006, 'A Cabana', 'William P. Young', 232, '2007/05/10', 'Missy, a filha mais nova, foi raptada e, de acordo com as provas encontradas numa cabana abandonada, brutalmente assassinada. Quatro anos mais tarde, Mack, mergulhado numa depressão da qual nunca recuperou, recebe um bilhete, aparentemente escrito por Deus, convidando-o a voltar à malograda cabana.', 'https://m.media-amazon.com/images/I/91fLBlcmpXL._AC_UF1000,1000_QL80_.jpg', 'Livro');

CREATE TABLE Doacoes(
	ID_Doacao int PRIMARY KEY NOT NULL,
	Valor_Doacao FLOAT NOT NULL,
	Data_Doacao DATE NOT NULL,
	ID_Usuario Int NOT NULL,
	FOREIGN KEY (ID_Usuario) REFERENCES Usuarios (ID_Usuario)
);

