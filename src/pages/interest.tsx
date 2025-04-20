import { motion } from 'framer-motion'

import DefaultLayout from '@/layouts/default'

const familyImages = [
  {
    id: 1,
    title: 'Gia đình',
    imageUrl: './gd.jpg',
    detailLink: '/life/details/family-photo1'
  },
  {
    id: 2,
    title: 'Gia đình',
    imageUrl: './gd1.jpg',
    detailLink: '/life/details/family-photo2'
  },
  {
    id: 3,
    title: 'Hai anh và Chị cả',
    imageUrl: './gd2.jpg',
    detailLink: '/life/details/family-photo3'
  },
  {
    id: 5,
    title: 'Anh zai trưởng',
    imageUrl: './anhca.jpg',
    detailLink: '/life/details/family-photo4'
  },
  {
    id: 4,
    title: 'Anh hai',
    imageUrl: './anhhai.jpg',
    detailLink: '/life/details/family-photo4'
  },
  {
    id: 6,
    title: 'Hai anh của toii nè',
    imageUrl: './haianh.jpg',
    detailLink: '/life/details/family-photo4'
  },
  {
    id: 7,
    title: 'Mẹ & tôi',
    imageUrl: './gd3.jpg',
    detailLink: '/life/details/family-photo4'
  },
  {
    id: 8,
    title: 'Hai gì cháu',
    imageUrl: './gd4.jpg',
    detailLink: '/life/details/family-photo4'
  },
  {
    id: 9,
    title: 'Du Xuân',
    imageUrl: './gd5.jpg',
    detailLink: '/life/details/family-photo4'
  }
]

const eventImages = [
  {
    id: 5,
    title: 'Tốt nghiệp',
    imageUrl: './totnghiep.jpg',
    detailLink: '/life/details/event-photo5'
  },
  {
    id: 6,
    title: 'Tốt nghiệp',
    imageUrl: './totnghiep1.jpg',

    detailLink: '/life/details/event-photo6'
  },
  {
    id: 7,
    title: 'Tốt nghiệp',
    imageUrl: './totnghiep2.jpg',
    detailLink: '/life/details/event-photo7'
  },
  {
    id: 8,
    title: 'Anh híu & tôi',
    imageUrl: './totnghiep3.jpg',
    detailLink: '/life/details/event-photo8'
  },
  {
    id: 9,
    title: 'Tốt nghiệp',
    imageUrl: './totnghiep4.jpg',
    detailLink: '/life/details/event-photo8'
  },
  {
    id: 10,
    title: 'Tốt nghiệp',
    imageUrl: './totnghiep5.jpg',
    detailLink: '/life/details/event-photo8'
  }
]

export default function LifePage() {
  return (
    <DefaultLayout>
      <div className="space-y-20 mb-32 px-6 max-w-5xl mx-auto text-center">
        {/* Giới thiệu */}
        <motion.section
          className="mt-20 space-y-6"
          id="about-life"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-teal-500">Gia Đình & Cuộc Sống</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Xin chào! Đây là góc nhỏ chia sẻ về gia đình, những khoảnh khắc đời thường và những sở
            thích cá nhân của mình.
          </p>
          <img
            alt="Gia đình"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            src="/gd00.jpg"
          />
          <span className=" mt-2 text-sm text-gray-500 p-0 m-0">Ngôi nhà nhỏ của tôi ❤️❤️❤️</span>
        </motion.section>

        {/* Nhật ký */}
        <motion.section
          className="space-y-8"
          id="diary"
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-3xl font-semibold text-green-600 flex items-center gap-2">
            📓 Nhật Ký Đời Thường
            <span className="text-sm text-gray-500">(Một chút về hành trình của tôi)</span>
          </h3>
          <div className="space-y-6 text-left">
            {/* Nhật ký ngày 1 */}
            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition-all ease-in-out">
              <p className="font-semibold text-gray-800">01/08/2022</p>
              <p className="text-gray-600 mt-2">
                🚀 Bắt đầu bước chân lên Đà Nẵng cùng với sự quyết tâm và nỗ lực của bản thân. Đó là
                bước vào một cánh cổng mới đầy nhiệt huyết và tài năng của tuổi trẻ. Cảm giác thật
                tuyệt vời khi nhìn thấy những bước tiến đầu tiên!
              </p>
            </div>

            {/* Nhật ký ngày 2 */}
            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition-all ease-in-out">
              <p className="font-semibold text-gray-800">13/07/2024</p>
              <p className="text-gray-600 mt-2">
                🏃‍♂️ Bắt đầu đi thực tập với những môi trường mới, người bạn mới và đồng nghiệp mới.
                Mỗi ngày trôi qua là một thử thách mới, nhưng tôi luôn học hỏi được điều gì đó mới
                mẻ!
              </p>
            </div>

            {/* Nhật ký ngày 3 */}
            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition-all ease-in-out">
              <p className="font-semibold text-gray-800">21/12/2024</p>
              <p className="text-gray-600 mt-2">
                🎓 Bước chân ra trường với bao nỗ lực, cuối cùng cũng hoàn thành đúng kỷ hạn đã đưa
                ra! Cảm giác khi nhận tấm bằng đại học thật sự rất tuyệt vời, như một chương mới
                trong cuộc đời.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600">
              📖 Chặng đường còn dài bản thân hãy luôn cố gắng
            </button>
          </div>
        </motion.section>

        {/* Album ảnh */}
        <motion.section
          id="family-gallery"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h3 className="text-3xl font-semibold text-blue-500 mb-6">👨‍👩‍👧‍👦 Album Gia Đình</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {familyImages.map((image) => (
              <motion.div
                key={image.id}
                className="relative"
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  alt={image.title}
                  className="rounded-lg shadow-md object-cover w-full h-48"
                  src={image.imageUrl}
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                  <h4 className="text-lg font-semibold">{image.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sự Kiện Gia Đình */}
        <motion.section
          id="family-events"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h3 className="text-3xl font-semibold text-teal-500 mb-6">🎉 Sự Kiện Tốt Nghiệp</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {eventImages.map((image) => (
              <motion.div
                key={image.id}
                className="relative"
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  alt={image.title}
                  className="rounded-lg shadow-md object-cover w-full h-48"
                  src={image.imageUrl}
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                  <h4 className="text-lg font-semibold">{image.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sở thích */}
        <motion.section
          className="space-y-6"
          id="hobbies"
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-3xl font-semibold text-purple-600">🎯 Sở thích</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left text-gray-700">
            <li className="bg-purple-50 p-4 rounded-xl shadow">📚 Đọc sách</li>
            <li className="bg-purple-50 p-4 rounded-xl shadow">🌱 Trồng cây</li>
            <li className="bg-purple-50 p-4 rounded-xl shadow">🍳 Nấu ăn</li>
            <li className="bg-purple-50 p-4 rounded-xl shadow">🎮 Chơi game</li>
            <li className="bg-purple-50 p-4 rounded-xl shadow">🚴‍♂️ Đạp xe</li>
            <li className="bg-purple-50 p-4 rounded-xl shadow">📷 Chụp ảnh</li>
          </ul>
        </motion.section>
      </div>
    </DefaultLayout>
  )
}
