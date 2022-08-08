namespace ApiMusicas.Models
{
    public class Album
    {
        public int Id { get; set; }
        public Artista Artista { get; set; }
        public string Nome { get; set; }

        public string CapaUrl { get; set; }
        public int AnoLancamento { get;set; }

    }
}
