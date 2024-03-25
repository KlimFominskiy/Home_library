import { Album } from '../album/album.models';
import { Artist } from '../artist/artist.models';
import { Track } from '../track/track.models';

export interface FavoritesResponse {
  artists: Artist[]; // favorite artists ids
  albums: Album[]; // favorite albums ids
  tracks: Track[]; // favorite tracks ids
}
