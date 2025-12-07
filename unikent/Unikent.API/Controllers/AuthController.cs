using Microsoft.AspNetCore.Mvc;
using Unikent.API.DbContext;
using Unikent.API.DTOs;
using Unikent.API.Models;

namespace Unikent.API.Controllers;
//namespace DefaultNamespace;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;

    public AuthController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("register")]
    public IActionResult Register([FromBody] RegisterDto request)
    {
        //Bu email ile daha önce kayıt olunmuş mu? Kontrol ediyoruz.
        var existingUser = _context.Members.FirstOrDefault(m => m.Email == request.Email);
        if (existingUser != null)
        {
            return BadRequest("Bu email adresi zaten kayıtlı.");
        }

        //Yeni üye nesnesini oluşturuyoruz.
        var newMember = new Member
        {
            Id = Guid.NewGuid(),  //Yeni bir kimlik oluşturur
            MName = request.Name,
            MSurname = request.Surname,
            Nickname = request.Nickname,
            Email = request.Email,
            PasswordHash = request.Password, 
            IsPremium = false 
        };

        //Veritabanına ekleme ve kaydetme
        _context.Members.Add(newMember);
        _context.SaveChanges();

        return Ok("Kayıt işlemi başarılı! Giriş yapabilirsiniz.");
    }
}