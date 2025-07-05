// appdemo.test.js
describe('Aplikasi ApiDemos', () => {
    it('should dapat membuka aplikasi', async () => {

        console.log('Aplikasi ApiDemos berhasil dibuka.');
        await driver.pause(5000); // Jeda 5 detik
    });
});