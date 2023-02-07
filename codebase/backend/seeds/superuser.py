# pip install psycopg2
## dependências:
## sudo apt install libpq-dev python3-dev

# pip install python-decouple
# pip install pandas_ods_reader

from pandas_ods_reader import read_ods
from decouple import config
import psycopg2
import hashlib

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

sql_query = """INSERT INTO "Usuarios" VALUES (DEFAULT, %s, %s, %s, %s)"""

password = hashlib.sha256('passme1234'.encode('utf-8')).hexdigest()

cursor.execute(sql_query, ('admin@admin.com', 'admin', password, 'ADMIN'))
conn.commit()
  
print("superuser seed executed")
