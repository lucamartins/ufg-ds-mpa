# pip install psycopg2
## dependências:
## sudo apt install libpq-dev python3-dev

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

base_path = "./seeds/odsFiles/newCargos.ods"
sheet_index = 1
df = read_ods(base_path , sheet_index)

sql_query = """INSERT INTO "Cargos" VALUES (DEFAULT, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""

for ind in df.index:
  cursor.execute(sql_query, (
    df['coIesCurso'][ind],
    df['desc'][ind], 
    df['grauAcademico'][ind],
    df['periodo'][ind],
    df['cidade'][ind],
    df['codg'][ind],
    df['vagas'][ind],
    df['grupo'][ind],
    df['campus'][ind]
  ))
  conn.commit()
  
print("cargos seeds executed")