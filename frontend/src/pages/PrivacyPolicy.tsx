import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 mt-16">
                <h1 className="text-3xl font-bold mb-6">Gizlilik Politikası</h1>
                <div className="prose dark:prose-invert max-w-none space-y-4">
                    <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>

                    <h2 className="text-2xl font-semibold mt-4">1. Toplanan Bilgiler</h2>
                    <p>
                        UniKent hizmetlerini kullandığınızda, deneyiminizi geliştirmek için bazı bilgiler toplayabiliriz.
                        Bu bilgiler arasında cihaz bilgileri, kullanım istatistikleri ve kayıt olurken sağladığınız kişisel bilgiler yer alabilir.
                    </p>

                    <h2 className="text-2xl font-semibold mt-4">2. Bilgilerin Kullanımı</h2>
                    <p>
                        Topladığımız bilgileri hizmetlerimizi sağlamak, geliştirmek, güvenliğini sağlamak ve sizinle iletişim kurmak için kullanırız.
                    </p>

                    <h2 className="text-2xl font-semibold mt-4">3. Çerezler</h2>
                    <p>
                        Sitemizde deneyiminizi iyileştirmek için çerezler kullanmaktayız. Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.
                    </p>

                    <h2 className="text-2xl font-semibold mt-4">4. İletişim</h2>
                    <p>
                        Gizlilik politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
