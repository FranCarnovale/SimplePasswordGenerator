export default function Generator ( { length, amount, useDigits, useChars})
{
    const ascii_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const chars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const usage = ascii_letters + (useDigits ? digits : "") + (useChars ? chars : "")
    let passwords = []
    let password = '';

    for (let i = 0; i < amount; i++)
    {
        for (let j = 0; j < length; j++)
        {
            const randomIndex = Math.floor(Math.random() * usage.length);
            password += usage[randomIndex];
        }
        passwords[i] = password;
        password = '';
    }

    return passwords;
};