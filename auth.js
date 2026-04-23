import { supabase } from './supabase.js'

export async function signInWithGoogle() {
  console.log('Attempting Google Sign In...');
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin,
      queryParams: {
        prompt: 'select_account'
      }
    }
  })
  
  if (error) console.error('Error signing in:', error.message)
  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) console.error('Error signing out:', error.message)
  window.location.reload()
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// Update UI based on auth state
export function updateAuthUI(user) {
  const signInLinks = document.querySelectorAll('.nav-user-link, .nav-signin-btn');
  
  signInLinks.forEach(link => {
    // Remove old listeners to prevent duplicates
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);

    if (user) {
      // User is signed in
      const userName = user.user_metadata?.full_name || user.email;
      newLink.innerHTML = `
        <div class="user-avatar" style="width: 24px; height: 24px; border-radius: 50%; background-color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: white;">
          ${userName.charAt(0).toUpperCase()}
        </div>
        <span>${userName.split(' ')[0]}</span>
      `;
      newLink.href = '#';
      newLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Do you want to sign out?')) signOut();
      });
    } else {
      // User is signed out
      newLink.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>Sign In</span>
      `;
      newLink.href = '#';
      newLink.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Sign in button clicked');
        signInWithGoogle();
      });
    }
  });
}
