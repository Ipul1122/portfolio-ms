<!-- Artikel -->
         <section id="blog" class="py-24 bg-gray-50">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16 animate-hidden fade-up">
                    <h2 class="text-4xl md:text-5xl font-bold font-heading mb-4">Artikel & Berita</h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">Update terbaru seputar teknologi dan coding</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <?php
                    // Pastikan koneksi database ($conn) sudah tersedia dari 'require be/config.php' di paling atas file
                    
                    // Query: Ambil 3 artikel terbaru
                    $query_blog = "SELECT * FROM articles ORDER BY created_at DESC LIMIT 3";
                    $result_blog = mysqli_query($conn, $query_blog);

                    // Cek jika ada artikel
                    if (mysqli_num_rows($result_blog) > 0) {
                        while ($row = mysqli_fetch_assoc($result_blog)) {
                            // Potong konten untuk preview (100 karakter)
                            $excerpt = substr(strip_tags($row['content']), 0, 100);
                            
                            // Cek gambar: jika kosong pakai placeholder
                            $gambar = $row['image'] ? "uploads/" . $row['image'] : "https://via.placeholder.com/400x250?text=No+Image";
                            
                            // LINK ARTIKEL (Pilih salah satu style di bawah)
                            
                            // Style A: Standar (Tanpa .htaccess SEO)
                            $link_artikel = "detail-artikel.php?slug=" . $row['slug'];
                            
                            // Style B: SEO Friendly (JIKA Anda sudah pasang .htaccess)
                            // $link_artikel = "artikel/" . $row['slug']; 
                    ?>
                            <article class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col h-full card-hover">
                                <a href="<?= $link_artikel; ?>" class="block overflow-hidden h-48">
                                    <img src="<?= $gambar; ?>" alt="<?= htmlspecialchars($row['title']); ?>" class="w-full h-full object-cover hover:scale-105 transition duration-500">
                                </a>
                                
                                <div class="p-6 flex flex-col flex-grow">
                                    <div class="text-sm text-primary mb-2 font-medium">
                                        <?= date('d M Y', strtotime($row['created_at'])); ?>
                                    </div>
                                    <h3 class="text-xl font-bold font-heading mb-3 leading-tight">
                                        <a href="<?= $link_artikel; ?>" class="hover:text-primary transition">
                                            <?= htmlspecialchars($row['title']); ?>
                                        </a>
                                    </h3>
                                    <p class="text-gray-600 text-sm mb-4 flex-grow">
                                        <?= $excerpt; ?>...
                                    </p>
                                    <a href="<?= $link_artikel; ?>" class="inline-flex items-center text-primary font-semibold hover:underline mt-auto">
                                        Baca Selengkapnya <i class="fas fa-arrow-right ml-2 text-sm"></i>
                                    </a>
                                </div>
                            </article>
                    <?php
                        }
                    } else {
                        // Tampilan jika tidak ada artikel
                        echo '<div class="col-span-3 text-center py-10 text-gray-500 bg-white rounded-xl shadow-sm border border-dashed border-gray-300">';
                        echo '<i class="far fa-newspaper text-4xl mb-3 text-gray-300"></i>';
                        echo '<p>Belum ada artikel yang diterbitkan.</p>';
                        echo '</div>';
                    }
                    ?>
                </div>
            </div>
        </section>