using ApiMusicas.Models;
using ApiMusicas.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ApiMusicas.Controllers
{
    [ApiController]
    [Route("api/artista")]
    public class ArtistasController : ControllerBase
    {

        private readonly ArtistaRepositorio _artistaRepositorio;

        public ArtistasController(ArtistaRepositorio repositorio)
        {
            _artistaRepositorio = repositorio;
        }
       
        [HttpGet]
        public ActionResult<Artista> Get()
        {
            return Ok(_artistaRepositorio.ObterDados());
        }

        [HttpPost]
        public ActionResult<Artista> Post(
            [FromBody] Artista novoArtista)
        {
            var artista = _artistaRepositorio.Criar(novoArtista);

            return Ok(artista);
                    
        }
    }
}