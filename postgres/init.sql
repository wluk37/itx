CREATE USER polywell PASSWORD 'polywell';
DROP DATABASE IF EXISTS itx_db;
CREATE DATABASE itx_db OWNER polywell;
\connect itx_db;