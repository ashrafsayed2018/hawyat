import { Cairo } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
const cairo = Cairo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
})
const Advantage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 py-20 md:py-40">
      {/* right */}
      <section class="bg-white py-8">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">مميزاتنا</h2>
          <ul class="list-disc pl-6 text-gray-700 space-y-4">
            <li>
              <span class="font-semibold">تغطية شاملة لجميع أنحاء جدة:</span>{' '}
              نقدم خدماتنا لتوفير حاويات الأنقاض ومخلفات البناء في جميع أنحاء
              مدينة جدة، مما يضمن تلبية احتياجات عملائنا أينما كانوا.
            </li>
            <li>
              <span class="font-semibold">مقاسات متنوعة للحاويات:</span> نُوفر
              حاويات بمقاسات 20 و30 ياردة، مما يُلبي كافة احتياجات الأفراد
              والمؤسسات، سواء كانت المشاريع صغيرة أو كبيرة.
            </li>
            <li>
              <span class="font-semibold">خدمة على مدار الساعة:</span> نعمل على
              مدار 24 ساعة لتلبية احتياجات عملائنا في أي وقت، مما يضمن لهم
              المرونة والراحة في استخدام خدماتنا.
            </li>
            <li>
              <span class="font-semibold">معتمدون من الأمانة:</span> شركتنا
              معتمدة ومؤهلة من قبل الأمانة، مما يعكس التزامنا بالمعايير والجودة
              في تقديم الخدمات.
            </li>
            <li>
              <span class="font-semibold">عقود مخصصة:</span> نقدم عقودًا مرنة
              لحاويات الأنقاض، مما يُسهل على عملائنا من الأفراد والشركات
              الاستفادة من خدماتنا وفقًا لاحتياجاتهم.
            </li>
          </ul>
        </div>
      </section>

      {/* left image */}
      <div className="w-full overflow-hidden rounded-lg shadow-2xl cursor-pointer">
        <Image
          src="/work/011.jpeg"
          alt="advantage"
          width={500}
          height={500}
          priority={true}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Advantage
