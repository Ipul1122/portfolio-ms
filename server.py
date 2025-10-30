from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

# 1. Kita buat class handler kustom yang mewarisi (inherits)
#    dari SimpleHTTPRequestHandler
class NoDirListingHandler(SimpleHTTPRequestHandler):
    
    # 2. Kita override (mengganti) metode list_directory
    def list_directory(self, path):
        """
        Fungsi ini dipanggil ketika server ingin menampilkan
        daftar isi sebuah direktori.
        
        Alih-alih menampilkannya, kita kirim respons "403 Forbidden".
        """
        self.send_error(403, "Directory listing is forbidden.")
        self.end_headers()
        return None # Mengembalikan None untuk menghentikan pemrosesan lebih lanjut

def run(server_class=HTTPServer, handler_class=NoDirListingHandler): # <-- 3. Ganti handler di sini
    """
    Fungsi run sekarang menggunakan NoDirListingHandler kustom kita
    sebagai handler default.
    """
    server_address = ('', 8000)
    httpd = server_class(server_address, handler_class)
    print('Server running at http://localhost:8000/')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
