namespace API.Entities;
public class AppUser
{
    public int Id { get; set; }
    public string Username { get; set; }

    // byte array for passwort hash and salt
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }

}
