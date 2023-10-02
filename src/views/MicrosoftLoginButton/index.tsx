import { Button } from "primereact/button";
import { MicrosoftIcon } from "@/components";

/**
 * View de botão de login com a Microsoft.
 *
 * Esta view exibe um botão com o rótulo "Login com Microsoft" e um ícone da Microsoft.
 * Quando clicado, ele chama a função de callback fornecida (onLogin) para iniciar o processo de login.
 *
 * @param {Object} props - As props para o componente.
 * @param {Function} props.onLogin - A função a ser chamada quando o botão de login é clicado.
 *
 * @returns {JSX.Element} O botão de login com a Microsoft.
 */

interface MicrosoftLoginButtonProps {
  onLogin: () => Promise<void>
}

function MicrosoftLoginButton({ onLogin }: MicrosoftLoginButtonProps) {
  return (
    <Button
      label="Login com Microsoft"
      icon={MicrosoftIcon}
      onClick={onLogin}
      style={{ backgroundColor: 'var(--cor-fundo-secundario)', fontWeight: '600', color: 'var(--cor-fundo)' }}
    />
  )
}

export default MicrosoftLoginButton;
