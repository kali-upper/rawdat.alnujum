import React from "react";
import {
  Baby,
  Palette,
  Music,
  BookOpen,
  Utensils,
  Activity,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Baby className="h-12 w-12 text-blue-600" />,
      title: "رعاية الرضع",
      description: "رعاية محبة للرضع من 6 أسابيع إلى 18 شهرًا مع اهتمام فردي",
      color: "from-blue-100 to-cyan-100",
    },
    {
      icon: <Palette className="h-12 w-12 text-purple-600" />,
      title: "الفنون الإبداعية",
      description:
        "الرسم والتلوين والحرف اليدوية لتنمية الإبداع والمهارات الحركية الدقيقة",
      color: "from-purple-100 to-pink-100",
    },
    {
      icon: <Music className="h-12 w-12 text-green-600" />,
      title: "الموسيقى والحركة",
      description: "أغاني ورقص وأنشطة إيقاعية للتنمية البدنية والمعرفية",
      color: "from-green-100 to-emerald-100",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-yellow-600" />,
      title: "القراءة المبكرة",
      description:
        "وقت القصة وأنشطة الصوتيات لبناء مهارات اللغة والقراءة والكتابة",
      color: "from-yellow-100 to-orange-100",
    },
    {
      icon: <Utensils className="h-12 w-12 text-red-600" />,
      title: "وجبات صحية",
      description:
        "وجبات خفيفة ووجبات مغذية تُعد طازجة يوميًا من قبل طاقم مطبخنا",
      color: "from-red-100 to-rose-100",
    },
    {
      icon: <Activity className="h-12 w-12 text-indigo-600" />,
      title: "اللعب في الهواء الطلق",
      description: "أنشطة ملعب آمنة واستكشاف الطبيعة للتنمية البدنية",
      color: "from-indigo-100 to-blue-100",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-br from-yellow-50 to-green-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            خدماتنا
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            نقدم برامج شاملة مصممة لدعم نمو طفلك في جميع المجالات - النمو
            المعرفي والاجتماعي والعاطفي والجسدي.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 group`}
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              الفئات العمرية التي نخدمها
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-4xl mb-2">👶</div>
                <h4 className="font-bold text-gray-800">الرضع</h4>
                <p className="text-gray-600">6 أسابيع - 18 شهرًا</p>
              </div>
              <div className="p-4">
                <div className="text-4xl mb-2">🚼</div>
                <h4 className="font-bold text-gray-800">الأطفال الصغار</h4>
                <p className="text-gray-600">18 شهرًا - 3 سنوات</p>
              </div>
              <div className="p-4">
                <div className="text-4xl mb-2">🎒</div>
                <h4 className="font-bold text-gray-800">
                  مرحلة ما قبل المدرسة
                </h4>
                <p className="text-gray-600">3 - 5 سنوات</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
