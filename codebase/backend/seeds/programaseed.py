# pip install psycopg2
# pip install python-decouple
# pip install pandas_ods_reader

from pandas_ods_reader import read_ods
from decouple import config
import psycopg2

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

base_path = "./seeds/odsFiles/programas.ods"
sheet_index = 1
df = read_ods(base_path , sheet_index)

sql_query = """INSERT INTO "Programas" VALUES (DEFAULT ,%s, %s, %s, %s)"""

for ind in df.index:
  cursor.execute(sql_query, (
    df['programa'][ind],
    df['tipo_programa'][ind],
    df['desc_programa'][ind],
    df['CATEGORIA_INGRESSO'][ind],
  ))
  conn.commit()

print("programas enem seeds executed")