# pip install psycopg2
# pip install python-decouple
# pip install pandas_ods_reader

import os
import sys
import psycopg2
from decouple import config
from pandas_ods_reader import read_ods

DB_NAME = config('DB_NAME')
DB_HOST = config('DB_HOST')
DB_USER = config('DB_USER')
DB_PASSWORD = config('DB_PASSWORD')
DB_PORT = config('DB_PORT')

conn = psycopg2.connect(
  database=DB_NAME,
  host=DB_HOST,
  user=DB_USER,
  password=DB_PASSWORD,
  port=DB_PORT
)

cursor = conn.cursor()

base_path = os.path.abspath('.') + '/src/odsFiles/' + sys.argv[1] + '.ods'
sheet_index = 1
df = read_ods(base_path , sheet_index)

sql_query = """INSERT INTO "Cadastro" VALUES (DEFAULT ,%s, %s, %s, %s, %s)"""

for ind in df.index:
  cursor.execute(sql_query, (
    df['nome_candidato'][ind],
    df['codg_cpf'][ind],
    df['desc_sexo'][ind],
    df['data_nascimento'][ind],
    df['numr_estado_civil'][ind]
  ))
  conn.commit()

print('reading file ' + sys.argv[1] + '.ods')

sys.stdout.flush()
