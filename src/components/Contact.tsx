import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-50 to-green-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            تواصل معنا
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            هل أنت مستعد لمنح طفلك أفضل بداية في الحياة؟ تواصل معنا اليوم لتحديد
            موعد زيارة أو معرفة المزيد عن برامجنا.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-8">
              تواصل معنا
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">الهاتف</h4>
                  <p className="text-gray-600">01159711136</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    البريد الإلكتروني
                  </h4>
                  <p className="text-gray-600">rawdat.alnujum@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">العنوان</h4>
                  <p className="text-gray-600">
                    بانوب - ش الدلجاوي القبلي بجوار كافيه حكاية
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">ساعات العمل</h4>
                  <p className="text-gray-600">
                    السبت: 8:00 صباحًا - 3:00 مساءً
                    <br />
                    الأحد: 8:00 صباحًا - 3:00 مساءً
                    <br />
                    الاثنين: 8:00 صباحًا - 3:00 مساءً
                    <br />
                    الثلاثاء: 8:00 صباحًا - 3:00 مساءً
                    <br />
                    الأربعاء: 8:00 صباحًا - 3:00 مساءً
                    <br />
                    الخميس: 8:00 صباحًا - 3:00 مساءً
                    <br />
                    الجمعة : مغلق
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-blue-600 mb-4">
                لماذا تختار روضة النجوم؟
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  مرفق مرخص ومؤمن
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  طاقم عمل معتمد وذو خبرة
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  نسبة منخفضة من الطلاب إلى المعلمين
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  وجبات صحية ووجبات خفيفة متوفرة
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  مرفق آمن مع إمكانية الوصول بالبطاقة الرئيسية
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              أرسل لنا رسالة
            </h3>

            {submitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-green-600 mb-2">
                  تم إرسال الرسالة!
                </h4>
                <p className="text-gray-600">
                  شكرًا لك على رسالتك. سنعود إليك قريبًا!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    عنوان البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="أدخل عنوان بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder="أخبرنا عن احتياجات طفلك أو اطرح أي أسئلة..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>أرسل الرسالة</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
