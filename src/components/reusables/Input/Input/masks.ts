export function telephone(e: React.FormEvent<HTMLInputElement>) {
    
  e.currentTarget.maxLength = 11;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4")
  e.currentTarget.value = value;
  return e;
}

export function cpf(e: React.FormEvent<HTMLInputElement>) {

e.currentTarget.maxLength = 11;
let value = e.currentTarget.value;
value = value.replace(/\D/g, "");
value = value.replace(/(\d{3})(\d)/,"$1.$2")
value = value.replace(/(\d{3})(\d)/,"$1.$2")
value = value.replace(/(\d{3})(\d{1,2})/,"$1-$2")
e.currentTarget.value = value;
return e;
}
