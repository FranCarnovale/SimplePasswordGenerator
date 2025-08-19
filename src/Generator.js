export default function Generator({ length, amount, useDigits, useChars }) {
    const ascii_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const chars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const usage = ascii_letters + (useDigits ? digits : "") + (useChars ? chars : "");
    let passwords = [];

    for (let i = 0; i < amount; i++) {
        let password = '';

        for (let j = 0; j < length; j++) {
            const randomValues = new Uint32Array(1);
            crypto.getRandomValues(randomValues);
            const randomIndex = randomValues[0] % usage.length;

            password += usage[randomIndex];
        }

        passwords.push(password);
    }

    return passwords;
};