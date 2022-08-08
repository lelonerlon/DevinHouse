﻿namespace ApiMusicas.Models
{
    public class Musica
    {
        public string Nome { get; set; }

        public TimeSpan Duracao { get; set; }

        public Album Album { get; set; }

        public Artista Artista { get; set; }
    }
}
