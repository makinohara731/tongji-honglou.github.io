document.addEventListener("DOMContentLoaded", () => {
    // 1. 判断当前层级，决定路径前缀
    // 如果 URL 包含 /pages/，说明在子目录，需要返回上一级 "../"
    const isPageDir = window.location.pathname.includes("/pages/");
    const rootPath = isPageDir ? "../" : "./";
    
    // 2. 生成导航栏
    const navHTML = `
    <nav class="bg-red-dream text-white shadow-md fixed w-full z-50 top-0 transition-all duration-300" id="navbar">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <!-- LOGO -->
            <a href="${rootPath}index.html" class="flex items-center space-x-2">
                <i class="fa fa-book text-2xl"></i>
                <span class="text-xl md:text-2xl font-bold font-song">同济红楼</span>
            </a>
            
            <!-- 桌面菜单 -->
            <ul class="hidden md:flex space-x-6 items-center">
                <li><a href="${rootPath}index.html" class="hover:text-yellow-200">首页</a></li>
                <li><a href="${rootPath}pages/gallery.html" class="hover:text-yellow-200">光影红楼</a></li>
                <li><a href="${rootPath}pages/quiz.html" class="hover:text-yellow-200">红楼雅趣</a></li>
                <li><a href="${rootPath}pages/join-us.html" class="hover:text-yellow-200">加入我们</a></li>
                <li><a href="${rootPath}community.html" class="bg-rice text-red-dream px-4 py-1 rounded font-bold hover:bg-white transition">
                    <i class="fa fa-comments-o mr-1"></i> 大观园
                </a></li>
            </ul>

            <!-- 手机菜单按钮 -->
            <button class="md:hidden" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
                <i class="fa fa-bars text-xl"></i>
            </button>
        </div>

        <!-- 手机下拉菜单 -->
        <div class="hidden bg-red-900/95 md:hidden" id="mobileMenu">
            <ul class="py-4 px-6 space-y-4 text-center">
                <li><a href="${rootPath}index.html" class="block py-2">首页</a></li>
                <li><a href="${rootPath}community.html" class="block py-2 font-bold text-yellow-200">进入社区</a></li>
                <li><a href="${rootPath}pages/gallery.html" class="block py-2">光影红楼</a></li>
                <li><a href="${rootPath}pages/quiz.html" class="block py-2">红楼雅趣</a></li>
            </ul>
        </div>
    </nav>
    <div class="h-16"></div> <!-- 占位符 -->
    `;

    // 3. 生成页脚
    const footerHTML = `
    <footer class="bg-ink text-rice py-8 mt-auto border-t-4 border-red-dream">
        <div class="container mx-auto px-4 text-center">
            <p class="font-song text-lg mb-4">同济大学红楼梦研究社</p>
            <div class="space-x-4 mb-4 text-gray-400">
                <i class="fa fa-weixin hover:text-green-500 cursor-pointer"></i>
                <i class="fa fa-weibo hover:text-red-500 cursor-pointer"></i>
                <i class="fa fa-envelope hover:text-yellow-500 cursor-pointer"></i>
            </div>
            <p class="text-xs text-gray-500">© 2025 Tongji Honglou Society | <a href="${rootPath}pages/join-us.html" class="underline">成为会员</a></p>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML("afterbegin", navHTML);
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});