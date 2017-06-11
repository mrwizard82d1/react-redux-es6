/**
 * Created by larryjones on 6/11/17.
 */

export function authorsFormattedForSelection(authors) {
  // Map the author information to author "view information"
  return authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });
}
