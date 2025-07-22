import { Star, Heart, Facebook } from "lucide-react";
import centerLogo from "../imgs/center.webp";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={centerLogo}
                alt="روضة النجوم Logo"
                className="h-10 w-10 rounded-full"
              />
              <h3 className="text-2xl font-bold">روضة النجوم</h3>
            </div>
            <p className="text-blue-100 leading-relaxed mb-4">
              حيث يتألق كل طفل! نحن ملتزمون بتقديم تعليم استثنائي في مرحلة
              الطفولة المبكرة في بيئة رعاية وآمنة وممتعة.
            </p>
            <div className="flex items-center space-x-2 text-yellow-300">
              <Heart className="h-5 w-5" />
              <span className="text-sm">صُنع بحب لنجومنا الصغار</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  من نحن
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  الخدمات
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("gallery")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  المعرض
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  تواصل معنا
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">معلومات الاتصال</h4>
            <div className="space-y-2 text-blue-100">
              <p>بانوب - ش الدلجاوي القبلي بجوار كافيه حكاية</p>
              <p>rawdat.alnujum@gmail.com</p>
              <p>01159711136</p>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">تابعنا</h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61578356674643"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VbAvHVEKbYMJ1r3tdu2f"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-8 pt-8 text-center text-blue-100">
          <p>
            &copy; 2026 روضة النجوم. جميع الحقوق محفوظة. صُنع بحب لنجومنا
            الصغار.
          </p>
        </div>
      </div>
    </footer>
  );
}
