// 渲染公共导航栏
function renderNavbar() {
    const navHTML = `
    <nav class="bg-red-dream text-white shadow-md fixed w-full z-50 top-0 transition-all duration-300" id="navbar">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <i class="fa fa-book text-2xl"></i>
                <a href="index.html" class="text-xl md:text-2xl font-bold">同济红楼社</a>
            </div>
            
            <!-- 移动端按钮 -->
            <button class="md:hidden text-white focus:outline-none" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
                <i class="fa fa-bars text-xl"></i>
            </button>
            
            <!-- 桌面端菜单 -->
            <ul class="hidden md:flex space-x-6 items-center">
                <li><a href="index.html" class="hover:text-yellow-200 transition-colors">首页</a></li>
                <li><a href="index.html#about" class="hover:text-yellow-200 transition-colors">社团介绍</a></li>
                <li><a href="index.html#appreciation" class="hover:text-yellow-200 transition-colors">红楼赏析</a></li>
                <li><a href="community.html" class="bg-yellow-100 text-red-dream px-3 py-1 rounded font-bold hover:bg-white transition-colors">
                    <i class="fa fa-comments-o mr-1"></i> 大观园社区
                </a></li>
            </ul>
        </div>
        
        <!-- 移动端下拉 -->
        <div class="md:hidden hidden bg-red-dream/95 border-t border-red-800" id="mobileMenu">
            <ul class="py-4 px-6 space-y-4">
                <li><a href="index.html" class="block hover:text-yellow-200">首页</a></li>
                <li><a href="community.html" class="block hover:text-yellow-200 font-bold">进入社区</a></li>
                <li><a href="index.html#contact" class="block hover:text-yellow-200">联系我们</a></li>
            </ul>
        </div>
    </nav>
    <div class="h-16"></div> <!-- 占位符，防止导航栏遮挡内容 -->
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // 导航栏滚动变色效果
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar && window.scrollY > 50) {
            navbar.classList.add('py-2', 'bg-red-dream/95');
            navbar.classList.remove('py-3');
        } else if (navbar) {
            navbar.classList.add('py-3');
            navbar.classList.remove('py-2', 'bg-red-dream/95');
        }
    });
}

// 渲染公共页脚
function renderFooter() {
    const footerHTML = `
    <footer class="bg-ink text-white py-8 mt-auto">
        <div class="container mx-auto px-4 text-center">
            <div class="mb-4 text-2xl space-x-4">
                <i class="fa fa-weixin hover:text-green-500 cursor-pointer"></i>
                <i class="fa fa-weibo hover:text-red-500 cursor-pointer"></i>
                <i class="fa fa-envelope hover:text-yellow-500 cursor-pointer"></i>
            </div>
            <p class="text-gray-400">© 2025 同济大学红楼梦研究社 | 传承经典 品味红楼</p>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// 自动执行
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
});
