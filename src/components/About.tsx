import React from "react";
import { Users, Award, Clock, Heart } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "معلمون ذوو خبرة",
      description: "معلمونا المؤهلون متحمسون لتنمية الطفولة المبكرة",
    },
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: "برامج معتمدة",
      description: "منهج معتمد مصمم للتعلم والتطوير الأمثل",
    },
    {
      icon: <Clock className="h-12 w-12 text-yellow-600" />,
      title: "ساعات مرنة",
      description: "نحن نستوعب جداول العائلات المزدحمة مع خيارات رعاية ممتدة",
    },
    {
      icon: <Heart className="h-12 w-12 text-pink-600" />,
      title: "بيئة رعاية",
      description: "خلق مساحة آمنة ومحبة حيث يشعر الأطفال بالأمان والتقدير",
    },
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            عن روضة النجوم
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            لأكثر من 10 سنوات، كرست روضة النجوم جهودها لتقديم تعليم استثنائي في
            مرحلة الطفولة المبكرة. نحن نؤمن بأن كل طفل فريد ويستحق اهتمامًا
            شخصيًا لمساعدته على تحقيق إمكاناته الكاملة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-yellow-100 to-blue-100 p-6 rounded-2xl text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-6">مهمتنا</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                إلهام حب التعلم في كل طفل من خلال تعليم مبتكر قائم على اللعب
                ينمي الإبداع والتفكير النقدي والمهارات الاجتماعية. نحن نتعاون مع
                العائلات لخلق أساس للنجاح والسعادة مدى الحياة.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white rounded-full p-8 shadow-lg">
                <div className="text-6xl">🌟</div>
                <p className="text-2xl font-bold text-blue-600 mt-4">
                  كل طفل
                  <br />
                  يتألق ببراعة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
