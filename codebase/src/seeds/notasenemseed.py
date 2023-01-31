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

base_path = "./src/seeds/odsFiles/notas_Enem.ods"
sheet_index = 1
df = read_ods(base_path , sheet_index)

sql_query = """INSERT INTO "Notas_Enem" VALUES (DEFAULT ,%s, %s, %s, %s, %s, %s, %s, %s, %s)"""

for ind in df.index:
  cursor.execute(sql_query, (
    df['numr_enem'][ind],
    df['codg_cpf'][ind],
    df['nome_candidato'][ind],
    df['numr_nota_cien_nat'][ind],
    df['numr_nota_cien_hum'][ind],
    df['numr_nota_ling'][ind],
    df['numr_nota_mat'][ind],
    df['numr_nota_red'][ind],
    df['numr_nota_total'][ind]
  ))
  conn.commit()

print("notas enem seeds executed")
