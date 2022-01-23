CREATE OR REPLACE FUNCTION gen_slug(uid text, len integer = 8)
RETURNS text AS
$body$
declare
  alphabet text[] = array[
    '1', '2','3','4','5','6','7','8','9',
    'a','b','c','d','e','f','g','h','i','j','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'
  ];
  cnt integer = 58;
  dst text = '';
  mod integer;
  num bigint;
  hash text;
begin
  uid = trim(uid);
  if length(uid) = 0 then
    raise exception 'uid cannot be empty';
  end if;
  -- hash uid
  hash = substr(md5(uid),1,16);
  -- derive biginteger from hash
  num = abs(('x'||hash)::bit(64)::bigint);

  while (num >= cnt) loop
    num = num / cnt;
    mod = num % cnt + 1;
    dst = alphabet[mod] || dst;
  end loop;

  return substr(alphabet[num] || dst, 0, len + 1);
end;
$body$
LANGUAGE 'plpgsql'
IMMUTABLE
CALLED ON NULL INPUT
SECURITY INVOKER
COST 100;
