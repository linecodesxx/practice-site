from playwright.sync_api import sync_playwright
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

BASE_URL = "https://gamification-teal.vercel.app"
OUTPUT = os.path.dirname(os.path.abspath(__file__))


def screenshot(page, name, selector=None, full_page=True):
    path = os.path.join(OUTPUT, f"{name}.png")
    if selector:
        el = page.locator(selector)
        if el.is_visible():
            el.screenshot(path=path)
            print(f"  [OK] {name}.png (selector: {selector})")
            return
    page.screenshot(path=path, full_page=full_page)
    print(f"  [OK] {name}.png (full page)")


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1280, "height": 800},
            device_scale_factor=1,
        )
        page = context.new_page()

        # -- 1. Главная --
        print("\n=== Главная (/) ===")
        page.goto(BASE_URL)
        page.wait_for_load_state("networkidle")
        screenshot(page, "01-home")
        screenshot(page, "01-home-guide", "#guide-section")
        screenshot(page, "01-home-info", "section:has(.InfoCard)")
        screenshot(page, "01-home-products", "section:has(.ProductCard)")
        screenshot(page, "01-home-blog", "section:has(.BlogCard)")

        # -- 2. Админка --
        print("\n=== Админка (/admin) ===")
        page.goto(f"{BASE_URL}/admin")
        page.wait_for_load_state("networkidle")
        screenshot(page, "02-admin")
        screenshot(page, "02-admin-menu", "#admin-menu")
        screenshot(page, "02-admin-shop", "#shop-admin")

        # -- 3. Каталог --
        print("\n=== Каталог (/catalog) ===")
        page.goto(f"{BASE_URL}/catalog")
        page.wait_for_load_state("networkidle")
        screenshot(page, "03-catalog")

        # -- 4. Корзина --
        print("\n=== Корзина (/cart) ===")
        page.goto(f"{BASE_URL}/cart")
        page.wait_for_load_state("networkidle")
        screenshot(page, "04-cart")

        # -- 5. Профиль --
        print("\n=== Профиль (/profile) ===")
        page.goto(f"{BASE_URL}/profile")
        page.wait_for_load_state("networkidle")
        screenshot(page, "05-profile")

        # -- 6. Сотрудники --
        print("\n=== Сотрудники (/employes) ===")
        page.goto(f"{BASE_URL}/employes")
        page.wait_for_load_state("networkidle")
        screenshot(page, "06-employes")

        # -- 7. Сотрудник (id=1) --
        print("\n=== Сотрудник (/employes/1) ===")
        page.goto(f"{BASE_URL}/employes/1")
        page.wait_for_load_state("networkidle")
        screenshot(page, "07-employe-detail")

        # -- 8. Playroom --
        print("\n=== Playroom (/playroom) ===")
        page.goto(f"{BASE_URL}/playroom")
        page.wait_for_load_state("networkidle")
        screenshot(page, "08-playroom")

        # -- 9. Аукционы --
        print("\n=== Аукционы (/playroom/auctions) ===")
        page.goto(f"{BASE_URL}/playroom/auctions")
        page.wait_for_load_state("networkidle")
        screenshot(page, "09-auctions")

        # -- 10. Сотрудники (playroom) --
        print("\n=== Сотрудники (/playroom/employees) ===")
        page.goto(f"{BASE_URL}/playroom/employees")
        page.wait_for_load_state("networkidle")
        screenshot(page, "10-playroom-employees")

        # -- 11. Опросы --
        print("\n=== Опросы (/playroom/poll) ===")
        page.goto(f"{BASE_URL}/playroom/poll")
        page.wait_for_load_state("networkidle")
        screenshot(page, "11-poll")

        # -- 12. Лидерборд --
        print("\n=== Лидерборд (/playroom/leaderboard) ===")
        page.goto(f"{BASE_URL}/playroom/leaderboard")
        page.wait_for_load_state("networkidle")
        screenshot(page, "12-leaderboard")

        # -- 13. Челленджи --
        print("\n=== Челленджи (/playroom/challenges) ===")
        page.goto(f"{BASE_URL}/playroom/challenges")
        page.wait_for_load_state("networkidle")
        screenshot(page, "13-challenges")

        # -- 14. Биржа задач --
        print("\n=== Биржа задач (/playroom/birja-zadach) ===")
        page.goto(f"{BASE_URL}/playroom/birja-zadach")
        page.wait_for_load_state("networkidle")
        screenshot(page, "14-birja-zadach")

        # -- 15. Колесо фортуны --
        print("\n=== Колесо фортуны (/playroom/fortune-wheel) ===")
        page.goto(f"{BASE_URL}/playroom/fortune-wheel")
        page.wait_for_load_state("networkidle")
        screenshot(page, "15-fortune-wheel")

        # -- 16. Квест --
        print("\n=== Квест (/quests/1) ===")
        page.goto(f"{BASE_URL}/quests/1")
        page.wait_for_load_state("networkidle")
        screenshot(page, "16-quest")

        browser.close()
        print("\n[OK] Vse skrinshoty sohraneny v screenshots/")


if __name__ == "__main__":
    main()
