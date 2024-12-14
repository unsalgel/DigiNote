# **DigiNote**

### **Proje Açıklaması**  
DigiNote, kullanıcıların not oluşturmasını, düzenlemesini ve silmesini sağlayan modern ve kullanışlı bir not alma uygulamasıdır. Uygulama, yerel depolama (localStorage) kullanarak notları kaydeder, böylece kullanıcılar sayfayı kapatsalar bile notlarını kaybetmezler.

---

## **Özellikler**
- **Not Ekleme**: Başlık ve içerik girerek hızlıca yeni notlar oluşturabilirsiniz.  
- **Not Düzenleme**: Mevcut notların başlığını ve içeriğini doğrudan düzenleyebilirsiniz.  
- **Not Silme**: Artık ihtiyacınız olmayan notları tek tıklamayla silebilirsiniz.  
- **Metin Biçimlendirme**:  
  - Kalın, italik, altı çizili ve üstü çizili metin ekleyebilirsiniz.  
  - Madde işaretleri veya numaralandırılmış liste kullanabilirsiniz.  
- **Otomatik Kayıt**: Tüm notlarınız otomatik olarak tarayıcınızın yerel deposuna kaydedilir.  

---

## **Kullanılan Teknolojiler**
- **React.js**: Uygulamanın yapısını ve dinamik bileşenlerini oluşturmak için kullanıldı.  
- **CSS**: Arayüz tasarımı için modern, sade ve kullanıcı dostu bir stil uygulandı.  
- **React Icons**: Biçimlendirme simgeleri için kullanıldı (örn: kalın, italik simgeleri).  
- **LocalStorage**: Verilerin kaybolmaması için tarayıcı tabanlı depolama kullanıldı.

---

## **Kurulum ve Kullanım**

### **1. Gerekli Araçlar**  
Proje çalıştırmak için aşağıdaki araçların bilgisayarınızda kurulu olduğundan emin olun:
- [Node.js](https://nodejs.org/)  
- [npm](https://www.npmjs.com/) veya [yarn](https://yarnpkg.com/)

### **2. Projeyi Çalıştırma**  
1. Projeyi klonlayın:  
   ```bash
   git clone https://github.com/kullanici-adi/dijital-not-defteri.git
   cd dijital-not-defteri
2. Bağımlılıkları yükleyin:  
   ```bash
   npm install
   # veya
   yarn install
   npm start
   # veya
   yarn start

## **Katkıda Bulunma**
Projeye katkıda bulunmak isterseniz aşağıdaki adımları izleyebilirsiniz:

1. **Projeyi Fork’layın**  
   Öncelikle bu projeyi GitHub üzerinde fork’layın.

2. **Yeni Bir Branch Oluşturun**  
   Yeni bir branch oluşturun:  
   ```bash
   git checkout -b yeni-ozellik

3. **Yapılacak Değişiklikler**  
   Projeye yapacağınız değişiklikleri bu branch üzerinde gerçekleştirin.
   Değişikliklerinizi test ettikten sonra, yapılan değişikliklerin commit edilmesi gerekmektedir:
   ```bash
   git commit -m "Açıklama: Yeni özellik veya düzeltme"

4. **Değişiklikleri Push Edin**  
   Branch'inizdeki değişiklikleri kendi fork’ınıza gönderebilirsiniz:
   ```bash
   git push origin yeni-ozellik
   
5. **Pull Request Gönderin**  
   Değişikliklerinizi ana projeye dahil etmek için bir pull request (PR) gönderin.
   GitHub üzerinden PR göndermek için "Pull Request" butonunu tıklayarak gerekli açıklamaları ekleyin.
