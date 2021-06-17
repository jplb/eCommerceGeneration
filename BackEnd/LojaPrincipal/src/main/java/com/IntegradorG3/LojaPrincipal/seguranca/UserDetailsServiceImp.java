package com.IntegradorG3.LojaPrincipal.seguranca;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.IntegradorG3.LojaPrincipal.model.Usuario;
import com.IntegradorG3.LojaPrincipal.repository.UsuarioRepository;

@Service
public class UserDetailsServiceImp implements UserDetailsService {

	@Autowired
	private UsuarioRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

		Optional<Usuario> user = userRepository.findByEmail(userName);
		user.orElseThrow(() -> new UsernameNotFoundException(userName + " not found. "));

		return user.map(UserDetailsImp::new).get();
	}

}
