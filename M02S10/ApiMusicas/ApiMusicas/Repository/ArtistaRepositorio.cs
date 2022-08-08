using ApiMusicas.Models;

namespace ApiMusicas.Repository
{
    public class ArtistaRepositorio
    {
        private static int _indiceID = 1;

        private static List<Artista> _artistas = new();
        public Artista Criar (Artista artista)
        {
            artista.Id = _indiceID;

            _indiceID++;

            _artistas.Add(artista);

            return artista;

        }

        public Artista Atualizar(Artista artista)
        {
            var artistaExistente = _artistas.
                FirstOrDefault(artistaLista => artistaLista.Id == artista.Id);
            if (artistaExistente == null) return null;

            artistaExistente.Nome = artista.Nome;
            artistaExistente.NomeArtistico = artista.NomeArtistico;
            artistaExistente.PaisOrigem = artista.PaisOrigem;
            artistaExistente.FotoUrl = artista.FotoUrl;

            return artista;

        }
        public void Remover(Artista artista)
        {
            var artistaExistente = _artistas.
                FirstOrDefault(artistaLista => artistaLista.Id == artista.Id);

            _artistas.Remove(artistaExistente);

        }

        public List<Artista> ObterDados()
        {
            return _artistas;
        }
    }
}
