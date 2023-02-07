# pip install psycopg2
# pip install python-decouple
# pip install pandas_ods_reader

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

sql_query = """INSERT INTO "Programas" VALUES (DEFAULT ,%s, %s, %s, %s)"""

programas = [
  [
    3,
    5,
    'Programa UFGInclui - Vaga Extra aos candidatos autodeclarados indígenas',
    'INDÍGENA'
  ],
  [
    3,
    6,
    'Programa UFGInclui - Vaga Extra aos candidatos autodeclarados negros quilombolas',
    'NEGRO QUILOMBOLA'
  ]
]

for i in range(len(programas)):
  cursor.execute(sql_query, (programas[i][0], programas[i][1], programas[i][2], programas[i][3]))

conn.commit()

print("programas enem seeds executed")
