using API.Entities;

namespace API;

public interface iTokenServices
{
    string CreateToken(AppUser user);

}
