<section id="mvp-showcase" class="py-24 bg-[#FDFBF7] overflow-hidden">
    <div class="container mx-auto px-6">
        
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 animate-hidden fade-up gap-6">
            <div class="text-center md:text-left">
                <span class="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">
                    MVP Showcase
                </span>
                <h2 class="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900">Project Highlight</h2>
                <p class="text-xl text-gray-600 max-w-2xl">
                    Koleksi Minimum Viable Product (MVP) siap pakai untuk bisnis modern.
                </p>
            </div>
            
            <div class="hidden md:flex gap-4">
                <button class="mvp-prev-btn w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-300">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <button class="mvp-next-btn w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-300">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>

        <div class="swiper mvp-swiper pb-12">
            <div class="swiper-wrapper">

                <div class="swiper-slide">
                    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div class="w-full lg:w-1/2">
                            <div class="relative group">
                                <div class="absolute -inset-4 bg-gradient-to-r from-orange-200 to-amber-100 rounded-3xl transform rotate-2 group-hover:rotate-1 transition duration-500 opacity-70"></div>
                                <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                    <img src="uploads/1765644147_clay-banks-qW_k6x5OfRc-unsplash.jpg" 
                                         alt="Kopi Senja MVP" 
                                         class="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700">
                                    <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-orange-100 flex items-center justify-between">
                                        <div>
                                            <h4 class="font-bold text-gray-900">Kopi Senja App</h4>
                                            <p class="text-xs text-orange-600 font-medium">● Live Status: Active</p>
                                        </div>
                                        <div class="flex -space-x-2">
                                            <div class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">UI</div>
                                            <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs">UX</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full lg:w-1/2">
                            <h3 class="text-3xl md:text-4xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                                Platform Digital untuk <br>
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                                    Modern Coffee Shop
                                </span>
                            </h3>
                            <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                                Website MVP yang dirancang untuk mempercepat proses pemesanan pelanggan (Self-Order). Dilengkapi manajemen menu real-time.
                            </p>
                            
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                <div class="flex items-start gap-3">
                                    <i class="fas fa-check-circle text-orange-500 mt-1"></i>
                                    <span class="text-gray-700 font-medium">QR Code Ordering</span>
                                </div>
                                <div class="flex items-start gap-3">
                                    <i class="fas fa-check-circle text-orange-500 mt-1"></i>
                                    <span class="text-gray-700 font-medium">Payment Gateway</span>
                                </div>
                                <div class="flex items-start gap-3">
                                    <i class="fas fa-check-circle text-orange-500 mt-1"></i>
                                    <span class="text-gray-700 font-medium">Real-time Dashboard</span>
                                </div>
                                <div class="flex items-start gap-3">
                                    <i class="fas fa-check-circle text-orange-500 mt-1"></i>
                                    <span class="text-gray-700 font-medium">Mobile First</span>
                                </div>
                            </div>

                            <div class="flex flex-col sm:flex-row gap-4">
                                <a href="https://ipul1122.github.io/coffe-shop/" target="_blank" class="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition shadow-lg flex justify-center gap-2">
                                    Lihat Demo <i class="fas fa-arrow-right mt-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Next MVP -->
                <?php include 'component/sample-mvp/printing.php'; ?>
            
            <div class="swiper-pagination mt-8"></div>
        </div>
    </div>
</section>