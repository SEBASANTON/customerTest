PGDMP                          z            customerTest    14.2    14.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    41587    customerTest    DATABASE     j   CREATE DATABASE "customerTest" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "customerTest";
                postgres    false            ?            1259    41599    clients    TABLE     ?  CREATE TABLE public.clients (
    id integer NOT NULL,
    status character varying(255) DEFAULT 'active'::character varying,
    fname character varying(255) NOT NULL,
    lname character varying(255) NOT NULL,
    address text NOT NULL,
    birthdate timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.clients;
       public         heap    postgres    false            ?            1259    41598    clients_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.clients_id_seq;
       public          postgres    false    210            ?           0    0    clients_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;
          public          postgres    false    209            \           2604    41602 
   clients id    DEFAULT     h   ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);
 9   ALTER TABLE public.clients ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            ?          0    41599    clients 
   TABLE DATA           i   COPY public.clients (id, status, fname, lname, address, birthdate, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    210   ?       ?           0    0    clients_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.clients_id_seq', 2, true);
          public          postgres    false    209            _           2606    41607    clients clients_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pkey;
       public            postgres    false    210            ?   ?   x????
?0E痯x`??Km6?.?P(:?<c??J	~???f\?	?;????ఌ	?)/	N??`'q?(?D??`??.???????,;????&?ڒ?m??4???5՚?U?r?y???r?%???8Ͽ4???!n??????WI?     