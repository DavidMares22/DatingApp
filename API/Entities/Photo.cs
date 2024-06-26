
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{

    [Table("Photos")]
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        public bool IsApproved { get; set; }

        public string PublicId { get; set; }

        // Relationship
        public int AppUserId { get; set; }
        public AppUser AppUser { get; set; }
    }
}
