--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: authors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.authors (
    name text,
    id integer NOT NULL
);


ALTER TABLE public.authors OWNER TO postgres;

--
-- Name: books; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.books (
    title text,
    id integer NOT NULL
);


ALTER TABLE public.books OWNER TO postgres;

--
-- Name: bridge; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bridge (
    booksid integer,
    authorid integer
);


ALTER TABLE public.bridge OWNER TO postgres;

--
-- Data for Name: authors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.authors (name, id) FROM stdin;
Lolita	181
Lonny	63
Dorthy	94
Karianne	170
Fred	175
Justine	74
Viva	29
Berenice	156
Saul	187
Ocie	125
Onie	197
Lizzie	189
Matteo	88
Johnson	21
Jacynthe	69
Nestor	76
Carlee	52
Fae	83
Edwina	68
Myra	81
Emelia	163
Prince	193
Laurie	198
Hazle	70
Nickolas	15
Maryse	22
Elinor	145
Kieran	158
Mohammed	64
Ezequiel	162
Shane	37
Kayleigh	47
Marshall	184
Abbigail	11
Marshall	77
Eloisa	122
Fleta	17
Charlene	57
Kendall	85
Amani	102
Timmothy	75
Eliseo	136
Lee	183
Lelah	128
Alicia	3
Delta	25
\.


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.books (title, id) FROM stdin;
Aut distinctio dolore	183
Sed facilis	137
Suscipit consequatur	25
Quaerat excepturi	163
Dolore sit sequi	35
Quae veritatis	8
Ut sapiente	134
Sapiente vero vel	136
Quis pariatur facilis	181
Quo accusantium	1
Nemo nihil	16
Facere maiores	160
Modi autem soluta	36
Itaque itaque voluptatum	113
Harum rem	165
Culpa soluta	7
Unde inventore	166
Adipisci voluptate voluptatem	119
Itaque et	156
Minima fuga qui	159
Dicta voluptatem sunt	118
Magnam possimus	120
Praesentium minus	96
Sed qui	189
Quod omnis laudantium	55
Enim architecto quis	12
Dignissimos voluptate neque	143
Iure quisquam qui	126
Excepturi suscipit unde	128
Mollitia aperiam ea	186
Dolor eos dolores	195
Dolorum eos similique	178
Laborum voluptatem aperiam	69
Sunt aliquid alias	101
Laboriosam fuga nostrum	100
Qui ab	50
Earum delectus tenetur	115
Amet debitis reprehenderit	81
Velit cumque	54
In officia	74
Consectetur sint velit	132
Atque laborum	77
Voluptatum voluptatem	121
Libero cum laboriosam	192
Omnis et	147
Dolore necessitatibus	116
Sint aut itaque	176
\.


--
-- Data for Name: bridge; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bridge (booksid, authorid) FROM stdin;
\.


--
-- Name: authors authors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.authors
    ADD CONSTRAINT authors_pkey PRIMARY KEY (id);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

